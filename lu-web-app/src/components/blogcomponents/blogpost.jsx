import React from 'react';
import '../../App.css'
import blog1 from '../../blog1.jpg';
import blog2 from '../../blog2.jpg';
import blog3 from '../../blog3.jpg';
// import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
// import BookIcon from '@material-ui/icons/Book';
// export const PostIcon = BookIcon;

// export const PostList = (props) => (
//     <List {...props}>
//         <Datagrid>
//             <TextField source="id" />
//             <TextField source="title" />
//             <DateField source="published_at" />
//             <TextField source="average_note" />
//             <TextField source="views" />
//             <EditButton basePath="/posts" />
//         </Datagrid>
//     </List>
// );

// const PostTitle = ({ record }) => {
//     return <span>Post {record ? `"${record.title}"` : ''}</span>;
// };

// export const PostEdit = (props) => (
//     <Edit title={<PostTitle />} {...props}>
//         <SimpleForm>
//             <TextInput disabled source="id" />
//             <TextInput source="title" />
//             <TextInput source="teaser" options={{ multiLine: true }} />
//             <TextInput multiline source="body" />
//             <DateInput label="Publication date" source="published_at" />
//             <TextInput source="average_note" />
//             <TextInput disabled label="Nb views" source="views" />
//         </SimpleForm>
//     </Edit>
// );

// export const PostCreate = (props) => (
//     <Create title="Create a Post" {...props}>
//         <SimpleForm>
//             <TextInput source="title" />
//             <TextInput source="teaser" options={{ multiLine: true }} />
//             <TextInput multiline source="body" />
//             <TextInput label="Publication date" source="published_at" />
//             <TextInput source="average_note" />
//         </SimpleForm>
//     </Create>
// );
const posts = () => {
    return(
         <div>
        <div id = 'card' className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={blog1} className="card-img" alt="responsive"/>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>   
        <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src={blog2} className="card-img" alt="..."/>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div> 
        <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src={blog3} className="card-img" alt="..."/>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div> 
    </div>
    )
}

export default posts;

// // style="max-width: 540px;