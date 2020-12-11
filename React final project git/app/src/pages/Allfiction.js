import React from 'react';
import '../App.css';

function Allfiction() {
	// app.get('/', (req, res) => )

	return (
		<div>
			<div id="title">
				<h2>All fiction</h2>
			</div>
			<main>
				<script id="entry-template" type="text/x-handlebars-template">
					{/* <div class="entry">
						<h1>{{ BookName }}</h1>
					</div> */}
				</script>
			</main>
		</div>
	);
}

export default Allfiction;
