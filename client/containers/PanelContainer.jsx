import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  renameChild,
  changeChildType,
  addChild,
  deleteChild,
  renameComponent,
  changeType,
  deleteComponent,
  setCurrentComponent,
  setTemplatesForComponent,
  useTemplates
} from '../actions/actions';
import ComponentDetail from '../components/ComponentDetail.jsx';
import TemplatingArea from '../components/TemplatingArea.jsx';
import FileTree from '../components/FileTree.jsx';
import PanelNavIcons from '../components/PanelNavIcons.jsx';
import ChildrenList from '../components/ChildrenList.jsx';

const mapStateToProps = store => ({
  state: store.main,
  data: store.main.data,
  currentComponent: store.main.currentComponent,
  templates: store.main.templates,
  nameAndCodeLinkedToComponentId: store.main.nameAndCodeLinkedToComponentId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      renameChild,
      changeChildType,
      addChild,
      deleteChild,
      renameComponent,
      changeType,
      deleteComponent,
      setCurrentComponent,
      setTemplatesForComponent,
      useTemplates
    },
    dispatch
  );

const SideNavContainer = ({
  data,
  currentComponent,
  templates,
  renameChild,
  changeChildType,
  addChild,
  deleteChild,
  renameComponent,
  changeType,
  deleteComponent,
  setCurrentComponent,
  setTemplatesForComponent,
  useTemplates,
  nameAndCodeLinkedToComponentId
}) => {
  return (
    <div
      key={`templateDropdown-${currentComponent.componentId}`}
      id='panel-container'
    >
      <BrowserRouter>
        <PanelNavIcons />
        <div id='divider-panel'></div>
        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <div id='component-detail'>
                <ComponentDetail
                  renameComponent={renameComponent}
                  changeType={changeType}
                  deleteComponent={deleteComponent}
                  currentComponent={currentComponent}
                  templates={templates}
                  setTemplatesForComponent={setTemplatesForComponent}
                  nameAndCodeLinkedToComponentId={
                    nameAndCodeLinkedToComponentId
                  }
                />
                <ChildrenList
                  addChild={addChild}
                  currentComponent={currentComponent}
                  renameChild={renameChild}
                  changeChildType={changeChildType}
                  deleteChild={deleteChild}
                  templates={templates}
                  setTemplatesForComponent={setTemplatesForComponent}
                  nameAndCodeLinkedToComponentId={
                    nameAndCodeLinkedToComponentId
                  }
                />
                <TemplatingArea useTemplates={useTemplates} />
              </div>
            )}
          />
          <Route
            path='/templates'
            render={() => <TemplatingArea useTemplates={useTemplates} />}
          />
          {/* <Route
              path='/file-tree'
              render={() => (
                <FileTree
                  data={data}
                  setCurrentComponent={setCurrentComponent}
                />
              )}
            /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavContainer);
