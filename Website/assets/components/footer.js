class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <footer>
		<div class="footer-container">
			<div class="left-col">
				<img src="/Website/assets/images/icon/logob.jpeg" style="width: 200px;">
				<div class="logo"></div>
				<div class="social-media">
					<a href="#"><img src="/Website/assets/images/icon/fb.png"></a>
					<a href="#"><img src="/Website/assets/images/icon/insta.png"></a>
					<a href="#"><img src="/Website/assets/images/icon/tt.png"></a>
					<a href="#"><img src="/Website/assets/images/icon/ytube.png"></a>
					<a href="#"><img src="/Website/assets/images/icon/linkedin.png"></a>
				</div><br><br>
				<p class="rights-text">Copyright © 2023 Created By Ram Swami. All Rights Reserved.</p>
				<br><p><img src="/Website/assets/images/icon/location.png"> JECRC University<br> Jaipur-302001</p><br>
				<p><img src="/Website/assets/images/icon/phone.png"> +91-7412846037<br><img src="/Website/assets/images/icon/mail.png">&nbsp; ramswami0021@gmail.com</p>
			</div>
			<div class="right-col">
				<h1 style="color: #fff">Our Newsletter</h1>
				<div class="border"></div><br>
				<p>Enter Your Email to get our News and updates.</p>
				<form action="http://localhost:8080/api/subscribe" method="post" class="newsletter-form">
					<input class="txtb" type="email" name="email" placeholder="Enter Your Email">
					<input class="btn" type="submit" name="submit" value="Submit">
				</form>
			</div>
		</div>
	</footer>
        `
    }
};

customElements.define('app-footer', footer);