import React from 'react';
import { Table } from 'react-bootstrap';
import PageTitle from '../shared/PageTitle/PageTitle';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs mx-auto my-4'>
            <PageTitle title="Blogs"></PageTitle>
            <div style={{ borderRadius: '20px' }} className='border border-5 border-warning p-3 m-3'>
                <h2 className='fs-2 fw-normal text-center'>Difference between javascript and nodejs</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <th className='w-50'>Javascript</th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Javascript is a programming language that we use for writing script on the website</td>
                            <td>NodeJS is a Javascript runtime environment</td>
                        </tr>
                        <tr>
                            <td>We can run javascript only on the browser</td>
                            <td>Javascript can be run outside the browser with the help of NodeJS</td>
                        </tr>
                        <tr>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div style={{ borderRadius: '20px' }} className='border border-5 border-warning p-3 m-3'>
                <h2 className='fs-2 fw-normal text-center'>When should you use nodejs and when should you use mongodb</h2>
                <p className='fw-light'>As we know that NodeJS is a server side engine which is mainly used to develop and handle server and on the other hand mongodb is a database that is used to store data as cloud storage. <br />
                    So when we need to develop server side, we will use nodejs and when we need to store our data, we will use mongodb.
                </p>
            </div>
            <div style={{ borderRadius: '20px' }} className='border border-5 border-warning p-3 m-3'>
                <h2 className='fs-2 fw-normal text-center'>Differences between sql and nosql databases</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <th className='w-50'>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SQL databases are primarily called as Relational Databases (RDBMS)</td>
                            <td>NoSQL database are primarily called as non-relational or distributed database</td>
                        </tr>
                        <tr>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>NoSQL have dynamic schema</td>
                        </tr>
                        <tr>
                            <td>These databases are not suited for hierarchical data storage</td>
                            <td>These databases are best suited for hierarchical data storage</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div style={{ borderRadius: '20px' }} className='border border-5 border-warning p-3 m-3'>
                <h2 className='fs-2 fw-normal text-center'>What is the purpose of jwt and how does it work</h2>
                <p className='fw-light'>JWTs are a good way of securely transmitting information between parties because they can be signed, which means we can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows us to verify that the content hasn't been tampered with. <br /><br />
                    A JWT is a string made up of three parts, separated by dots , and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. <br />
                    Once decoded, we will get two JSON strings: <br />
                    1. The header and the payload <br />
                    2. The signature <br />
                    The JOSE or JSON Object Signing and Encryption header contains the type of token, JWT in this case, and the signing algorithm.

                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>
            </div>
        </div>
    );
};

export default Blogs;