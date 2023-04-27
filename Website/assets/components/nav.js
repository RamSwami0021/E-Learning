class nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <header>
		<div class="nav" id="nav">
			<div id="learned-logo">
			<a href="../index.html"><img src="/Website/assets/images/icon/logo.jpeg" style="width: 120px;"></a></div>
			<div class="switch-tab" id="switch-tab" onclick="switchTAB()"><img src="/Website/assets/images/icon/menu.png"></div>
			<ul id="list-switch">
				<li><a href="courseJee.html"><img src="/Website/assets/images/courses/d1.png" class="icon">JEE</a></li>
				<li><a href="#"><img src="/Website/assets/images/courses/paper.png" class="icon">GATE</a></li>
				<li><a href="courseComputer.html"><img src="/Website/assets/images/courses/computer.png" class="icon">Computer Courses</a></li>
				<li><a href="coursesComputer.html#data"><img src="/Website/assets/images/courses/data.png" class="icon">Data Structures</a></li>
				<li><a href="coursesComputer.html#algo"><img src="/Website/assets/images/courses/algo.png" class="icon">Algorithm</a></li>
				<li><a href="coursesComputer.html#projects"><img src="/Website/assets/images/courses/projects.png" class="icon">Projects</a></li>
			</ul>
			<div class="search" id="search-switch">
				<input type="text" placeholder="Search" class="srch"><button id="srchbtn"><img src="/Website/assets/images/icon/search.png"></button>
			</div>
		</div>
	</header>
        `
    }
};

customElements.define('app-nav', nav);