import React from "react";
import './../App.css';
import {
    Link
} from "react-router-dom";
import p1 from './../p1.png';
import p2 from './../p2.png';
import p3 from './../p3.png';
import p4 from './../p4.png';
import p5 from './../p5.jpg';

function DashboardPat() {
    return (
        <div>
            <div>
                <div className="logo">Alztracker</div>
                <div className="logout">
                    <Link to="/">Logout</Link>
                </div>
            </div>
            <div className="clear">
                <hr className="dahboard-line" />
            </div>
            <div>
                <div className="pat-table-title">History</div>
                <table className="pat-table" border="1">
                    <tr>
                        <th className="pat-table-dt pat-table-heading">Sr</th>
                        <th className="pat-table-dt pat-table-heading">Date</th>
                        <th className="pat-table-dt pat-table-heading">Doc</th>
                        <th className="pat-table-dt pat-table-heading">Summary</th>
                        <th className="pat-table-dt pat-table-heading">Details</th>
                    </tr>
                    <tr>
                        <td className="pat-table-dt">1</td>
                        <td className="pat-table-dt">Deepak S</td>
                        <td className="pat-table-dt">Doctor Joshi</td>
                        <td className="pat-table-dt">Alzheimer’s</td>
                        <td className="pat-table-dt"><a>View Details</a></td>
                    </tr>
                </table>
            </div>
            <div>
                <h4 className="pat-detail-data-scetion">
                    Your Diagnosis:
                </h4>
                <p className="pat-detail-data">
                    Mild cognitive impairment that has progressed to Alzheimer’s
                    Disease over the last 2 years.
                </p>
                <h4 className="pat-detail-data-scetion">
                    Proposed Management:
                </h4>
                <p className="pat-detail-data">
                    <ul>
                        <li>
                            Treatment to put disease progress on hold on
                            (in combination)
                            Donepezil, galantamine, rivastigmine
                        </li>
                        <li>
                            Brain rehabilitation exercises
                        </li>
                        <li>
                            Treatment of side effects (if any)
                        </li>
                        <li>
                            Anti-depressants if needed
                        </li>
                        <li>
                            Care-giver assistance for daily activities
                        </li>
                    </ul>
                </p>
                <h4 className="pat-detail-data-scetion">
                    Follow-up Schedule:
                </h4>
                <p className="pat-detail-data">
                    Assessment of response after every month
                </p>
                <h4 className="pat-detail-data-scetion">
                    Your Prognosis:
                </h4>
                <img src={p1} style={{ width: '50%' }} />
                <p className="pat-detail-data">
                    Congratulations, you are among the top 5% to have the best prognosis for AD on this platform.
                </p>
                <h4 className="pat-detail-data-scetion">
                    Your Reports:
                </h4>
                <p className="pat-detail-data">
                    1. Coronal view of Computed Tomographic image showing overall degeneration and significant hippocampal atrophy
                </p>
                <img src={p2} style={{ width: '50%' }} />
                <p className="pat-detail-data">
                    2. FDG-PET image shows low glucose usage occurs in some areas of the brain and it usually precedes cortical atrophy and clinical cognitive symptoms in AD patients
                </p>
                <img src={p3} style={{ width: '50%' }} />
                <p className="pat-detail-data">
                    3.
                    The MRI reported that the the amount of atrophy in several sMRI brain regions have been shown to be sensitive to the disease progression of Alzheimer’s.

                </p>
                <img src={p4} style={{ width: '50%' }} />
                <p className="pat-detail-data">
                    4. The CSF protein levels show decreased  levels of amyloid-beta (Aβ) 1 to 42 peptide (Aβ1−−42; a marker of amyloid mis-metabolism) and elevations of total tau (t-tau) and hyperphosphorylated tau, a considered  established predictive biomarkers of AD dementia in patients with MCI.

                    5. APOE ε4 is considered the strongest genetic risk factor that increases the occurrence with a 2-to 3-fold risk for AD, and lowers the age of onset for AD.

                </p>
                <img src={p5} style={{ width: '50%' }} />
            </div>

        </div>
    );
}

export default DashboardPat;