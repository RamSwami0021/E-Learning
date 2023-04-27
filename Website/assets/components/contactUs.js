class contactUs extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div class="diffSection" id="contactus_section">
		<center><p style="font-size: 50px; padding: 100px">Contact Us</p></center>
		<div class="csec"></div>
		<div class="back-contact">
			<div class="cc">
			<form action="http://localhost:8080/api/contact_form" method="post">
				<label>First Name <span class="imp">*</span></label><label style="margin-left: 185px">Last Name <span class="imp">*</span></label><br>
				<center>
				<input type="text" id="fname" name="fname" style="margin-right: 10px; width: 175px" required="required"><input type="text" id="lname" name="lname" style="width: 175px" required="required"><br>
				</center>
				<label>Email <span class="imp">*</span></label><br>
				<input type="email" id="email" name="email" style="width: 100%" required="required"><br>
				<label>Message <span class="imp">*</span></label><br>
				<input type="text" id="message" name="message" style="width: 100%" required="required"><br>
				<label>Additional Details</label><br>
				<textarea id="addtional" name="addtional"></textarea><br>
				<button type="submit" name="submit" id="csubmit">Send Message</button>
			</form>
			</div>
		</div>
	</div>
        `
    }
};

customElements.define('app-contact-us', contactUs);