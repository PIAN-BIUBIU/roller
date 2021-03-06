import React from "react"
import Modal from 'react-modal';
import tinycolor from "tinycolor2"
import _ from "lodash"
import Subheader from "./Subheader";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Button from "./Button";
import pluginCall from 'sketch-module-web-view/client'
import { connect } from 'react-redux'
import { faArrowDown }  from '@fortawesome/fontawesome-free-solid'
import Text from "./Text";
import RulesForm from "./RulesForm"
import Dropzone from 'react-dropzone'
import Papa from 'papaparse';
import JSONPretty from 'react-json-pretty';
import EndpointForm from "./endpointForm"
import FormatTips from "./FormatTips";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class RulesDropZone extends React.Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
    this.onComplete = this.onComplete.bind(this)
    this.handleEndpointSubmit = this.handleEndpointSubmit.bind(this)
    this.onReadJson = this.onReadJson.bind(this)

    this.state = {csvError: null, jsonError: null}
  }

  handleEndpointSubmit(data) {
    if (!window.mock) {
      pluginCall('saveEndpoint', data.endpoint)
    }
    if (this.props.onComplete) {
      this.props.onComplete()
    }
  }


  onComplete(data) {
    validHeaders = _.isEqual(data.meta.fields.sort(),['name','hex'].sort())
    if (validHeaders) {
      this.setState({csvError: null})
      if(!window.mock) {
        pluginCall('saveRules', data.data)
        if (this.props.onComplete) {
          this.props.onComplete()
        }
      }
    } else {
      this.setState({csvError: 'Please format CSV with headers: name, hex'})
    }
  }

  onReadJson(data) {
    const fileAsBinaryString = data.currentTarget.result
    try {

    const colors = JSON.parse(fileAsBinaryString).colors
    const keys = _.uniq(_.flatten(_.map(colors, _.keys)))
    if (_.isEqual(keys.sort(),["name","hex"].sort())) {
      if(!window.mock) {
        pluginCall('saveRules', colors)
        if (this.props.onComplete) {
          this.props.onComplete()
        }
      }
    } else {
      this.setState({jsonError: 'Please format JSON as { colors: [{name: "White", hex: "#FFFFFF"}]}'})
    }
    } catch (e) {
      this.setState({jsonError: 'Please format JSON as { colors: [{name: "White", hex: "#FFFFFF"}]}'})
    }
  }



  onDrop(acceptedFiles, rejectedFiles) {
    if (acceptedFiles[0].type == "application/json") {
      const reader = new FileReader();
      reader.onload = this.onReadJson
      // reader.onload = () => {
      //   const fileAsBinaryString = reader.result;
      //   const keys = _.uniq(_.flatten(_.map(JSON.parse(fileAsBinaryString).colors, _.keys)))
      //   if (_.isEqual(keys.sort(),["name","hex"].sort())) {


      //   }
      // };
      reader.readAsBinaryString(acceptedFiles[0]);
      // if (_.isEqual(_.keys(acceptedFiles[0][0]).sort(), ['name', 'hex'].sort())) {
      //   if(!window.mock) {
      //     pluginCall('saveRules', data.data)
      //     this.props.onComplete()
      //   }
      // }
    } else {
      Papa.parse(acceptedFiles[0], {header: true, complete: this.onComplete});
    }
  }


  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Import</Tab>
          <Tab>Integrate</Tab>
          <Tab>Upload</Tab>
        </TabList>
        <TabPanel>
          <div className='text-center flex flexjcc p24'>
            <Button onClick={() => {pluginCall('importGlobalColors'); if (this.props.onComplete) {this.props.onComplete()}}} size="small" style="default">Import Global Colors</Button>
            <div className="p8" />
            <Button onClick={() => {pluginCall('importDocumentColors'); if (this.props.onComplete) {this.props.onComplete()}}} size="small" style="default">Import Document Colors</Button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex flexjcc p24'>
            <EndpointForm onSubmit={this.handleEndpointSubmit}/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='p24'>
            <Dropzone
              accept={[".csv", ".json"]}
              style={{padding: '24px', border: '1px dashed #919EAB'}}
              onDrop={this.onDrop}
            >
              <div className='text-center'>
                <Text size="body">Drag and drop your CSV or JSON files here or</Text>
                <div className="mb8" />
                <Button onClick={() => pluginCall('openFile')} size="small" style="default">Upload File</Button>
              </div>
            </Dropzone>
            {this.state.csvError}
            {this.state.jsonError}
            {this.props.errorMsg}

            {this.props.showFormatTips && <FormatTips />}
          </div>
        </TabPanel>
      </Tabs>
    )
  }
}

export default RulesDropZone
