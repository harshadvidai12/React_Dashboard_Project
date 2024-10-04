import React ,{ useState ,useEffect} from 'react'
import styles from '../assets/styles/Table.module.css';
import ViewIcon from '../assets/images/eye.svg';
import AddIcon from '../assets/images/AddIcon.svg';
import FilterIcon from '../assets/images/FilterIcon.svg';
import UploadIcon from '../assets/images/document-upload.svg';
import { patientsList } from '../components/constant/constTable';

const PatientListTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientClick = (patient) => {

    setSelectedPatient(patient);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showModal && !event.target.closest('.modal-content')) {
        handleCloseModal();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showModal]);
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
            {patientsList.map((patient, index) => (
              <tr key={index} onClick={() => handlePatientClick(patient)}>
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
          <span className={styles.totalNumber}>{patientsList.length}</span>
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
    {showModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Patient Details</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5>Patient Name: {selectedPatient.name}</h5>
                <p>MR Number: {selectedPatient.mrNumber}</p>
                <p>Gender: {selectedPatient.gender}</p>
                <p>Accession#: {selectedPatient.accession}</p>
                <p>Doctor: {selectedPatient.doctor}</p>
                <p>Notes: {selectedPatient.notes}</p>
                <p>Result: {selectedPatient.result}</p>
                <p>Status: {selectedPatient.status}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
          </div>
          )}

    </div>

  )
}

export default PatientListTable
