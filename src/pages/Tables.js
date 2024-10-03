import React from 'react'
import styles from '../assets/styles/Table.module.css';
import ViewIcon from '../assets/images/eye.svg';
import AddIcon from '../assets/images/AddIcon.svg';
import FilterIcon from '../assets/images/FilterIcon.svg';
import UploadIcon from '../assets/images/document-upload.svg';


const patients = [
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Cody Fisher',
    notes: 'Completed',
    result: 'Released',
    status: 'Completed',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Darlene Robert',
    notes: 'Completed',
    result: 'N/A',
    status: 'Pending',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'Released',
    status: 'Completed',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '169RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'Released',
    status: 'Completed',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '169RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'Released',
    status: 'Completed',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
  },
  {
    name: 'Emma Watson',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '169RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
  }
  

  // Add more patients as per the image...
];
const PatientList = () => {
  return (
    <div>
      <div className={styles.tableContainer} style={{height: 'calc(100vh - 228px)'}}>

        <div className='subTitleFont p-2'>
          <div className='d-flex justify-content-between align-items-center'>

            <div className={styles.headerNameCss}>Patient</div>

            <div className="d-flex flex-wrap gap-2 align-items-center " >
              <div className="search-container">
                <input type="text" className="form-control border" placeholder="Search by Name, Case ID, Accession" />
              </div>
              <div className="d-flex ">

                <img className='dashBoardIcon' src={AddIcon} alt='Add' />
                <img className='dashBoardIcon' src={FilterIcon} alt='Filter' />

              </div>
            </div>
          </div>
        </div>

        <div className="row mx-2 p-1 bg-light rounded patientPara px-4 mb-2 justify-content-between">
        <div className={styles.checkboxText}>
            <input className="custom-checkbox" type="checkbox" id="flexCheckDefault1" />
            <span className={styles.checkBoxLabel}>
              No Transferable Embryos
            </span>

          </div>
          <div className={styles.checkboxText}>

            <input className="custom-checkbox" type="checkbox" id="flexCheckDefault2" />
            <span className={styles.checkBoxLabel}>
              All Transferable Embryos
            </span>

          </div>
          <div className={styles.checkboxText}>

            <input className="custom-checkbox" type="checkbox" id="flexCheckDefault3" />
            <span className={styles.checkBoxLabel}>
              Draft Patients
            </span>

          </div>
          <div className={styles.checkboxText}>

            <input className="custom-checkbox" type="checkbox" id="flexCheckDefault4" />
            <span className={styles.checkBoxLabel}>
              International Patients
            </span>

          </div>

        </div>


        <table className={styles.table}>
          <thead>
            <tr>
              <th>Patient Name, MR No., Gender</th>
              <th>Accession#</th>
              <th>Doctor</th>
              <th>Notes</th>
              <th>Upload Consent</th>
              <th>Stim Report</th>
              <th>Result</th>
              <th>Report Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.patientInfo}>
                    <div style={{ fontWeight: '700' }}>{patient.name}</div>
                    <div className={styles.mrInfo}>
                      <a href={`#mr/${patient.mrNumber}`}><b>{patient.mrNumber} | {patient.gender}</b></a>
                    </div>
                  </div>
                </td>
                <td><b>{patient.accession}</b></td>
                <td><b>{patient.doctor}</b></td>
                <td><span  className={styles.icon}><img src={ViewIcon} alt="View" /><span className={styles.anchorTag}>View</span> </span></td>
                <td><span  className={styles.icon}> <img src={UploadIcon} alt="Upload"/><span className={styles.uploadTag}>View</span></span></td>
                <td> <span  className={styles.icon}><img src={UploadIcon} alt="Upload" /><span className={styles.uploadTag}>View</span></span></td>
                <td> <b>{patient.result}</b> </td>
                <td> <span  className={styles.icon}><img src={ViewIcon} alt="View"/><span className={styles.anchorTag}>View</span> </span></td>
                <td>
                  <span className={patient.status === 'Completed' ? styles.completed : styles.pending}>
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`${styles.tableContainer} mt-2`}>
      <div className={styles.footer}>
        <div className={styles.totalContainer}>
          <span>Total :</span>
          <span className={styles.totalNumber}>{patients.length}</span>
        </div>
        <div className={styles.statusContainer}>
          <div className={styles.statusItem}>
            <span className={styles.notStartedIcon}></span>
            <span className={styles.footerIconLabel}>Not started</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.pendingIcon}></span>
            <span className={styles.footerIconLabel}>Pending</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.completedIcon}></span>
            <span className={styles.footerIconLabel}>Completed</span>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default PatientList
