class samplePaper extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div class="title2" id="sample_papers">
		<span>Sample Papers 2018-2023</span>
		<div class="shortdesc2">
			<p>Practice more and more question papers</p>
		</div>
	</div>

	<div class="sample">
		<ul>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2018 Set-A</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2018 Set-B</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2018 Set-C</a></li>
		</ul>
		<ul>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2019 Set-A</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2019 Set-B</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2019 Set-C</a></li>
		</ul>
		<ul>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2020 Set-A</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2020 Set-B</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2020 Set-C</a></li>
		</ul>
	</div>
	<div class="sample lastSample">
		<ul>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2021 Set-A</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2021 Set-B</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2021 Set-C</a></li>
		</ul>
		<ul>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2022 Set-A</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2022 Set-B</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2022 Set-C</a></li>
		</ul>
		<ul>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2023 Set-A</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2023 Set-B</a></li>
			<li><a href="/Website/assets/samplePapers/p1.pdf" target="_blank">Sample Paper 2023 Set-C</a></li>
		</ul>
	</div>
        `
    }
};

customElements.define('app-sample-paper', samplePaper);