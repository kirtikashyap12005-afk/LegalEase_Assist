import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/GuidedQuestionnaire.css";

function GuidedQuestionnaire() {

const [category,setCategory]=useState("");

return(

<div className="question-container">

<h1>Legal Guidance Questionnaire</h1>

<p className="subtitle">
Answer a few questions so we can guide you correctly.
</p>

<div className="question-card">

<label>Select Legal Category</label>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option value="">Choose Category</option>

<option value="cyber">Cyber Fraud</option>

<option value="consumer">Consumer Rights</option>

<option value="women">Women Safety</option>

<option value="property">Property Dispute</option>

<option value="labour">Labour Rights</option>

</select>
{category==="cyber" && (

<>

<div className="question">

<label>Was money transferred from your account?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

<div className="question">

<label>Did you share OTP or PIN?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

<div className="question">

<label>Have you informed your bank?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

</>

)}
{category==="consumer" && (

<>

<div className="question">

<label>Did you purchase a product or service?</label>

<select>

<option>Product</option>

<option>Service</option>

</select>

</div>

<div className="question">

<label>What was the issue?</label>

<select>

<option>Defective Product</option>

<option>Refund Denied</option>

<option>Wrong Billing</option>

<option>Other</option>

</select>

</div>

<div className="question">

<label>Do you have invoice or receipt?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

</>

)}
{category==="women" && (

<>

<div className="question">

<label>What kind of issue are you facing?</label>

<select>

<option>Harassment</option>

<option>Domestic Violence</option>

<option>Stalking</option>

<option>Workplace Harassment</option>

<option>Other</option>

</select>

</div>

<div className="question">

<label>Are you in immediate danger?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

<div className="question">

<label>Would you like emergency contact information?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

</>

)}

{category==="property" && (

<>

<div className="question">

<label>What is the property issue?</label>

<select>

<option>Ownership Dispute</option>

<option>Land Dispute</option>

<option>Tenant/Landlord</option>

<option>Illegal Possession</option>

</select>

</div>

<div className="question">

<label>Do you have property documents?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

<div className="question">

<label>Has any legal notice been received?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

</>

)}

{category==="labour" && (

<>

<div className="question">

<label>What is your issue?</label>

<select>

<option>Salary Not Paid</option>

<option>Wrongful Termination</option>

<option>PF / ESI Issue</option>

<option>Overtime Payment</option>

</select>

</div>

<div className="question">

<label>Are you employed currently?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

<div className="question">

<label>Do you have an employment contract?</label>

<select>

<option>Yes</option>

<option>No</option>

</select>

</div>

</>

)}

<Link to="/rights-result">

<button className="next-btn">

Get My Legal Guidance →

</button>

</Link>

</div>

</div>

);

}

export default GuidedQuestionnaire;