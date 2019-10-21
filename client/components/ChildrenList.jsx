import React from 'react';
import EachChild from './EachChild.jsx';
import TemplateDropdown from './TemplateDropdown.jsx';
const ChildrenList = ({
  addChild,
  renameChild,
  changeChildType,
  deleteChild,
  templates,
  setTemplatesForComponent,
  currentComponent,
  nameAndCodeLinkedToComponentId
}) => {
  console.log('Inside of ChildrenList.jsx')
  return (
    <React.Fragment>
      <h3>Add Child</h3>
      <form id='children-list-form' onSubmit={addChild}>
        <input
          type='text'
          id='add-child-name'
          name='childName'
          placeholder="Enter Child's Name"
        />
        <div>
          <input
            id='add-child-container-checkbox'
            name='checkbox'
            type='checkbox'
          />
          <label
            className='container-label'
            htmlFor='add-child-container-checkbox'
          >
            Container
          </label>
        </div>
        <button type='submit'>
          <i className='far fa-plus-square'></i>
        </button>
      </form>
      <h3>Children List</h3>
      <div id='children-list'>
        {currentComponent.children &&
          currentComponent.children.filter((node, index) => {
            return node !== null;
          }).map((child, idx) => {
            // console.log('inside children list', child)
            return childMaker(
              child,
              idx,
              renameChild,
              changeChildType,
              deleteChild,
              templates,
              setTemplatesForComponent,
              nameAndCodeLinkedToComponentId
            )
          }
          )}
      </div>
    </React.Fragment>
  );
};
const childMaker = (
  child,
  idx,
  renameChild,
  changeChildType,
  deleteChild,
  templates,
  setTemplatesForComponent,
  nameAndCodeLinkedToComponentId
) => {
  return (
    <div key={idx} className='each-child-container'>
      {console.log('Inside of childMaker function inside of ChildrenList.jsx')}
      <EachChild
        key={idx}
        name={child.name}
        childId={child.componentId}
        isContainer={child.isContainer}
        renameChild={renameChild}
        changeType={changeChildType}
        deleteChild={deleteChild}
      />
      <TemplateDropdown
        currentComponent={child}
        templates={templates}
        setTemplatesForComponent={setTemplatesForComponent}
        nameAndCodeLinkedToComponentId={nameAndCodeLinkedToComponentId}
      />
    </div>
  );
};
export default ChildrenList;
