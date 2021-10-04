import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Modal, Button } from 'react-bootstrap';
import './dashboard.scss';

import Session from '../../utils/Session';
import { logout } from '../../actions/login';
import { getEmployees, deleteEmployee, editEmployee, addEmployee } from './api';

const Employees = (props) => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [deleteRecord, setDeleteRecord] = useState({});
    const [editRecord, setEditRecord] = useState({});

        const invokeLogout = e => {
            e.preventDefault();
            Session.clearAll();
            props.dispatch(logout());
            props.history.push('/');
        };

        const invokeSearch = e => {
            e.preventDefault();
            props.dispatch(getEmployees({query: e.target.value}));
        };

        const invokeDelete = e => {
            e.preventDefault();
            props.dispatch(deleteEmployee(deleteRecord));
            setShowDeleteModal(false);
        }

        const invokeEdit = e => {
            e.preventDefault();
            props.dispatch(editEmployee(editRecord));
            setShowEditModal(false);
        }

        const invokeAdd = e => {
            e.preventDefault();
            let data = {
                employeeId: e.target.employeeId.value,
                name: e.target.name.value,
                email: e.target.email.value,
                phoneCode: e.target.phoneCode.value,
                phone: e.target.phone.value,
                address: e.target.address.value
            };
            props.dispatch(addEmployee(data));
            setShowAddModal(false);
        }

        const handleEditChange = e => {
            const { name, value } = e.target;
            setEditRecord(prevState => ({
                ...prevState,
                [name]: value
            }));
        }

        const handleLogoutModalClose = (e) => {
            e.preventDefault();
            setShowLogoutModal(false);
        }

        const handleLogoutModalShow = (e) => {
            e.preventDefault();
            setShowLogoutModal(true);
        }

        const handleDeleteModalClose = (e) => {
            e.preventDefault();
            setShowDeleteModal(false);
        }

        const handleDeleteModalShow = (e, item) => {
            e.preventDefault();
            setDeleteRecord(item);
            setShowDeleteModal(true);
        }

        const handleAddModalClose = (e) => {
            e.preventDefault();
            setShowAddModal(false);
        }

        const handleAddModalShow = (e) => {
            e.preventDefault();
            setShowAddModal(true);
        }

        const handleEditModalClose = (e) => {
            e.preventDefault();
            setShowEditModal(false);
        }

        const handleEditModalShow = (e, item) => {
            e.preventDefault();
            setEditRecord(item);
            setShowEditModal(true);
        }

        useEffect(() => {
            props.dispatch(getEmployees());
        }, [props.loading]);
        
        return (
            <React.Fragment>
                    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" onChange={invokeSearch} />
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#logout" onClick={handleLogoutModalShow}>Sign out</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="container-fluid">
                    <div className="row">
                        <main role="main" className="col-md-8 ml-sm-auto col-lg-12 pt-3 px-4">
                        <div className="col-md-12 text-right">
                            <span className="alert alert-danger" hidden={!props.errorMessage}>{props.errorMessage}</span>
                            <span className="alert alert-success" hidden={!props.successMessage}>{props.successMessage}</span>
                        </div>
                        <h1 className="h2">Employees</h1>
                        <div className="col-md-12 text-right">
                            <button type="button" className="btn btn-primary pull-right" onClick={handleAddModalShow}>Add new</button>
                        </div><br />
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.employees.map(item => {
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.employee_id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone_code+item.phone}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button type="button" className="btn btn-primary" onClick={(e) => handleEditModalShow(e, item)}>Edit</button>&nbsp;
                                                <button type="button" className="btn btn-danger" onClick={(e) => handleDeleteModalShow(e, item)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }) }
                                <p hidden={props.data.employees.length > 0}>No records found</p>
                             </tbody>
                            </table>
                        </div>
                        </main>
                    </div>
                </div>

                {/* Logout modal */}
                <Modal
                    show={showLogoutModal}
                    onHide={handleLogoutModalClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                    <Modal.Title>Sign out ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure, Do you want to proceed ?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleLogoutModalClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={invokeLogout}>Yes</Button>
                    </Modal.Footer>
                </Modal>
                {/* Logout modal */}

                {/* Delete modal */}
                <Modal
                    show={showDeleteModal}
                    onHide={handleDeleteModalClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                    <Modal.Title>Delete ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure, Do you want to delete {deleteRecord.name}({deleteRecord.employee_id}) ?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteModalClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={invokeDelete} disabled={props.loading}>{ props.loading ? 'Loading...' : 'Yes' }</Button>
                    </Modal.Footer>
                </Modal>
                {/* Delete modal */}

                {/* Add modal */}
                <Modal
                    show={showAddModal}
                    onHide={handleAddModalClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <form onSubmit={invokeAdd}>
                    <Modal.Header>
                    <Modal.Title>Add new employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <label for="employeeId" className="sr-only">Employee ID</label>
                            <input type="text" id="employeeId" name="employeeId" className="form-control" placeholder="Employee ID" required autofocus />
                            <label for="name" className="sr-only">Name</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder="Name" required autofocus />
                            <label for="email" className="sr-only">Email</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Email" required autofocus />
                            <label for="phoneCode" className="sr-only">Phone</label>
                            <select className="form-control" id="phoneCode" name="phoneCode" required autofocus>
                                <option value="" selected disabled>Phone code</option>
                                <option value="+91">+91</option>
                            </select>
                            <input type="text" id="phone" name="phone" className="form-control" placeholder="Phone" pattern="\d*" maxLength="10" required autofocus />
                            <label for="address" className="sr-only">Address</label>
                            <textarea className="form-control" name="address" rows="5" id="address" placeholder="Address" required autofocus></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleAddModalClose}>
                        Cancel
                    </Button>
                            <Button variant="primary" type="submit" disabled={props.loading}>{ props.loading ? 'Loading...' : 'Add' }</Button>
                    </Modal.Footer>
                    </form>
                </Modal>
                {/* Add modal */}

                {/* Edit modal */}
                <Modal
                    show={showEditModal}
                    onHide={handleEditModalClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <form onSubmit={invokeEdit}>
                    <Modal.Header>
                    <Modal.Title>Edit employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <label for="employeeId" className="sr-only">Employee ID</label>
                            <input type="text" id="employeeId" name="employee_id" className="form-control" value={editRecord.employee_id} disabled />
                            <label for="name" className="sr-only">Name</label>
                            <input type="text" id="name" name="name" className="form-control" value={editRecord.name} onChange={handleEditChange} required autofocus />
                            <label for="email" className="sr-only">Email</label>
                            <input type="email" id="email" name="email" className="form-control" value={editRecord.email} onChange={handleEditChange} required autofocus />
                            <label for="phoneCode" className="sr-only">Phone</label>
                            <select className="form-control" id="phoneCode" name="phone_code" value={editRecord.phone_code} onChange={handleEditChange} required autofocus>
                                <option value="" selected disabled>Phone code</option>
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                            </select>
                            <input type="text" id="phone" name="phone" className="form-control" value={editRecord.phone} onChange={handleEditChange} pattern="\d*" maxLength="10" required autofocus />
                            <label for="address" className="sr-only">Address</label>
                            <textarea className="form-control" name="address" rows="5" id="address" value={editRecord.address} onChange={handleEditChange} required autofocus></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditModalClose}>
                        Cancel
                    </Button>
                            <Button variant="primary" type="submit" disabled={props.loading}>{ props.loading ? 'Loading...' : 'Update' }</Button>
                    </Modal.Footer>
                    </form>
                </Modal>
                {/* Edit modal */}

            </React.Fragment>
        )
}

function mapStateToProps(state) {
    return {
        data: state.employeeReducer.response,
        successMessage: state.employeeReducer.successMessage,
        errorMessage: state.employeeReducer.errorMessage,
        loading: state.employeeReducer.loading
    };
}

export default connect(mapStateToProps)(Employees);