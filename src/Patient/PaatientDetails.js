import React from "react";
import './../App.css';
import brain1 from './../brain1.png';
import brain2 from './../brain2.png';
import brain3 from './../brain3.png';
import brain4 from './../brain4.jpg';
import {
    Link
} from "react-router-dom";

function PatientDetails() {
    return (
        <div>
            <div>
                <div className="logo">Alztracker</div>
                <div className="logout">
                    <Link to="/dashboard-doc"><b>Back</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">Logout</Link>
                </div>

            </div>
            <div className="clear">
                <hr className="dahboard-line" />
            </div>
            <div>
                <p className="pat-detail-data">
                    Patient ABC
                    Aged 58 presented on memory clinic on 11/9/21 with a 2-year history of repetitiveness, memory loss, and executive function loss. Magnetic resonance imaging scan at age 58 revealed mild generalized cortical atrophy. She is white with 2 years of postsecondary education. Retirement at age 48 from employment as a manager in telecommunications company was because family finances allowed and not because of cognitive challenges with work. Progressive cognitive decline was evident by the report of deficits in instrumental activities of daily living performance over the past 9 months before her initial consultation in the memory clinic. Word finding and literacy skills were noted to have deteriorated in the preceding 6 months according to her spouse. Examples of functional losses were being slower in processing and carrying out instructions, not knowing how to turn off the stove, and becoming unable to assist in boat docking which was the couple’s pastime. She stopped driving a motor vehicle about 6 months before her memory clinic consultation. Her past medical history was relevant for hypercholesterolemia and vitamin D deficiency. She had no surgical history. She had no history of smoking, alcohol, or other drug misuse. Laboratory screening was normal. There was no first-degree family history of presenile dementia. Neurocognitive assessment at the first clinic visit revealed a Mini Mental State Examination (MMSE) score of 14/30; poor verbal fluency (patient was able to produce only 5 animal names and 1 F-word in 1 min) as well as poor visuospatial and executive skills.She had fluent speech without semantic deficits. Her neurological examination was pertinent for normal muscle tone and power, mild ideomotor apraxia on performing commands for motor tasks with no suggestion of cerebellar dysfunction, normal gait, no frontal release signs. Her speech was fluent with obvious word finding difficulties but with no phonemic or semantic paraphrasic errors. Her general physical examination was unremarkable without evidence of presenile cataracts. She had normal hearing. There was no evidence of depression or psychotic symptoms. At the time of the initial assessment, her mother was deceased at age 79 after a hip fracture with a history long-term smoking and idiopathic pulmonary fibrosis. Her family believes that there is possible German and Danish descent on her father’s side. Her father was alive and well at age 80 at the time of her presentation with a history coronary artery disease. He is still alive and well with no functional or cognitive concerns at age 87 at the time of writing this report. Her paternal grandfather died at approximately age 33 of appendicitis with her paternal grandmother living with mild memory loss but without known dementia or motor symptoms until age 76, dying after complications of abdominal surgery. Her paternal uncle was diagnosed with Parkinson disease in his 40s and died at age 58. Her maternal grandmother was reported to be functionally intact, but mildly forgetful at the time of her death at age 89. The maternal grandfather had multiple myocardial infarctions and died of congestive heart failure at age 75. She was the eldest of 4 siblings (ages 44 to 56 at the time of presentation); none had cognitive problems. She had no children.
                    Because of her young age and clinical presentation with no personality changes, language or motor change, nor fluctuations, EOAD was the most likely clinical diagnosis. As visuospatial challenges were marked at her first visit and poor depth perception developing over time, posterior cortical variant of AD was also on the differential as was atypical presentation of frontotemporal dementias. Without fluctuations, Parkinsonism, falls, hallucinations, or altered attention, Lewy Body dementia was deemed unlikely. After treatment with a cholinesterase inhibitor, her MMSE improved to 18/30, tested 15 months later with stability in function. Verbal fluency improved marginally with 7 animals and 3 F-words. After an additional 18 months, function and cognition declined (MMSE=13/30) so memantine was added. The stabilizing response to the cholinesterase inhibitor added some degree of confidence to the EOAD diagnosis. In the subsequent 4 years, she continued to decline in cognition and function such that admission to a care facility was required with associated total dependence for basic activities of daily living. Noted by family before transfer to the long-term care facility were episodic possible hallucinations. It was challenging to know if what was described was misinterpretation of objects in view or a true hallucination. During this time, she developed muscle rigidity, motor apraxias, worsening perceptual, and language skills and became dependent for all activities of daily livings. At the fourth year of treatment, occasional myoclonus was noted. She was a 1 person assist for walking because of increased risk of falls. After 1 year in the care home, she was admitted to the acute care hospital in respiratory distress. CT brain imaging during that admission revealed marked generalized global cortical atrophy and marked hippocampal atrophy

                </p>
                <img src={brain1} />
                <p className="pat-detail-data">
                    Coronal view, computed tomographic image, patient age 63, showing significant generalized atrophy and dramatic hippocampal atrophy
                </p>
                <h4 className="pat-detail-data-scetion">
                    FDG PET
                </h4>
                <p className="pat-detail-data">
                    FDG-PET image shows the reduction of glucose metabolism or an alternations of hypometabolism occurs in the posterior cingulated cortex, precuneus, and posterior parietal temporal association cortex and it usually precedes cortical and clinical cognitive symptoms in AD patients
                </p>
                <img src={brain2} />
                <img src={brain3} />
                <p className="pat-detail-data">
                    The MRI captures the disease-related structure patterns showing the loss of brain volumes and decreases in cortical thickness for the early prediction of AD and MCI. A number of studies, covering volume of interest, region of interest (ROI), shape analysis and voxel-based morphometry, have reported that the amount of atrophy in several have reported that the amount of atrophy in several sMRI brain regions, such as the entorhinal cortex, hippocampus, para hippocampal gyrus, cingulate, and medial temporal cortex are sensitive to the disease progression and prediction of MCI conversion
                </p>
                <h4 className="pat-detail-data-scetion">
                    CSF protein : tau amyloid
                </h4>
                <p className="pat-detail-data">
                    decreased CSF levels of amyloid-beta (Aβ) 1 to 42 peptide (Aβ1−−42; a marker of amyloid mis-metabolism and elevations of total tau (t-tau) and hyperphosphorylated tau at the threonine181 (p-tau181p) protein (markers of axonal damage and neurofibrillary tangles) are considered to be CSF best established predictive biomarkers of AD dementia in patients with MCI.
                    The APOE ε4 allele has been consistently linked to normal cognitive decline in MCI and AD dementia patients (Luciano et al., 2009; Brainerd et al., 2011; Alzheimer's Disease Neuroimaging Initiative et al., 2016; Sapkota et al., 2017). It is also said that especially APOE ε4 is the strongest genetic risk factor that increases the occurrence with a 2-to 3-fold risk for AD, and it lowers the age of onset AD

                </p>
                <h4 className="pat-detail-data-scetion">
                Genetic Testing
                </h4>
                <img src={brain4} />
                <p className="pat-detail-data pat-detail-data-italic">
                PSEN2 sequence showing that lysine at position 221 is evolutionarily conserved. A 30 amino acid span of PSEN2 (Homo sapiens) is shown covering K221, which is shown in red. Amino acids which differ for are highlighted. Sequences shown are PSEN1 and PSEN2 (from H. sapiens), Pan troglodytes (chimpanzee), Macaca mullatta (Rhesus Macaque monkey), Mus musculus (mouse), Gallus gallus (chicken), Caenorhabditis elegans, Danio rerio (zebrafish), Drosophila melanogaster (Drosophila; fruit fly). *Amino acids are identical across all samples; “:” conservative mutations with input sequence. Alignment performed using the tool MUSCLE.6 PSEN indicates presenilin.
                    </p>
            </div>
        </div>
    );
}

export default PatientDetails;