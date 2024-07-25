class MvccMarkDownEditor extends MvccComponent {
	/**
	 * Gets the selected text inside the editor.
	 */
	selected() {
		//
		// Define and assign the editor element.
		//
		const _el = this.root.getElementById("js-editor");

		//
		// Return the selected text.
		//
		return _el.value.substring(_el.selectionStart, _el.selectionEnd).trim() || " ";
	}

	/**
	 * Gets the text inside the editor.
	 */
	get text() {
		return this.root.getElementById("js-editor").value;
	}

	/**
	 * Sets the text inside the editor.
	 */
	set text(_value) {		 
		this.root.getElementById("js-editor").value = _value;
	}
	
	/**
	 * Adds a custom toolbar button.
	 */
	addButton(_title, _image, _on_click) {
		this.root.getElementById("js-toolbar").innerHTML += `
			<button class="mvcc-button custom-button--type-outline" title="${_title}" onclick="${_on_click}">
				<img src="${_image}">
			</button>				
		`;
	}

	/**
	 * Register the event handlers.
	 */	
	created() {
		/**
		 * Heading 1 event
		 */
		if(this.root.getElementById("js-editor-h1")) { 
			this.root.getElementById("js-editor-h1").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `\n\r# ${this.selected()} `);
			});
		}

		/**
		 * Heading 2 event
		 */
		if(this.root.getElementById("js-editor-h2")) { 
			this.root.getElementById("js-editor-h2").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `\n\r# ${this.selected()} `);
			});
		}	

		/**
		 * Heading 3 event
		 */
		if(this.root.getElementById("js-editor-h3")) { 
			this.root.getElementById("js-editor-h3").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `\n\r### ${this.selected()} `);
			});
		}		

		/**
		 * Heading 4 event
		 */
		if(this.root.getElementById("js-editor-h4")) { 
			this.root.getElementById("js-editor-h4").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `\n\r#### ${this.selected()} `);
			});
		}	

		/**
		 * Bold event
		 */
		if(this.root.getElementById("js-editor-bold")) { 
			this.root.getElementById("js-editor-bold").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `**${this.selected()}**`);
			});
		}	

		/**
		 * Italic event
		 */
		if(this.root.getElementById("js-editor-italic")) { 
			this.root.getElementById("js-editor-italic").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `_${this.selected()}_`);
			});
		}	

		/**
		 * Bullets event
		 */
		if(this.root.getElementById("js-editor-bullets")) { 
			this.root.getElementById("js-editor-bullets").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `\n\r- ${this.selected()} `);
			});
		}	

		/**
		 * Numbers event
		 */
		if(this.root.getElementById("js-editor-numbers")) { 
			this.root.getElementById("js-editor-numbers").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `\n\r1. ${this.selected()} `);
			});
		}

		/**
		 * Hr event
		 */
		if(this.root.getElementById("js-editor-hr")) { 
			this.root.getElementById("js-editor-hr").addEventListener("click", () => {			 
				document.execCommand("insertText", false, `\n\r----- ${this.selected()} `);
			});
		}
		
		/**
		 * Link event
		 */
		if(this.root.getElementById("js-editor-link")) { 
			this.root.getElementById("js-editor-link").addEventListener("click", () => {	
				var _url = window.prompt("Enter the link's url:", "https://");	
				
				if(_url !== null) {
					document.execCommand("insertText", false, `[${this.selected()}](${_url})`);
				}
			});
		}
	}
	
	/**
	 * Renders the editor component.
	 */
	render(state, props) {	 
		/**
		 * Heading 1 button
		 */
		const _h1_button = this.props.buttons.includes("h1") == false ? "" : `
			<button id="js-editor-h1" class="mvcc-button custom-button--type-outline" title="Heading 1">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
					<path d="M200-280v-400h80v160h160v-160h80v400h-80v-160H280v160h-80Zm480 0v-320h-80v-80h160v400h-80Z" />
				</svg>
			</button>	
		`;

		/**
		 * Heading 2 button
		 */
		const _h2_button = this.props.buttons.includes("h2") == false ? "" : `
			<button id="js-editor-h2" class="mvcc-button custom-button--type-outline" title="Heading 2">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
					<path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm400 0v-160q0-33 23.5-56.5T600-520h160v-80H520v-80h240q33 0 56.5 23.5T840-600v80q0 33-23.5 56.5T760-440H600v80h240v80H520Z" />
				</svg>
			</button>	
		`;

		/**
		 * Heading 3 button
		 */
		const _h3_button = this.props.buttons.includes("h3") == false ? "" : `
			<button id="js-editor-h3" class="mvcc-button custom-button--type-outline" title="Heading 3">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
					<path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm400 0v-80h240v-80H600v-80h160v-80H520v-80h240q33 0 56.5 23.5T840-600v240q0 33-23.5 56.5T760-280H520Z" />
				</svg>
			</button>	
		`;

		/**
		 * Heading 4 button
		 */
		const _h4_button = this.props.buttons.includes("h4") == false ? "" : `
			<button id="js-editor-h4" class="mvcc-button custom-button--type-outline" title="Heading 4">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
					<path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm600 0v-120H520v-280h80v200h120v-200h80v200h80v80h-80v120h-80Z" />
				</svg>
			</button>	
		`;

		/**
		 * Bold button
		 */
		const _bold_button = this.props.buttons.includes("bold") == false ? "" : `
			<button id="js-editor-bold" class="mvcc-button custom-button--type-outline" title="Bold">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
					<path d="M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z" />
				</svg>
			</button>	
		`;

		/**
		 * Italic button
		 */
		const _italic_button = this.props.buttons.includes("italic") == false ? "" : `
			<button id="js-editor-italic" class="mvcc-button custom-button--type-outline" title="Italics">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
					<path d="M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z" />
		  		</svg>
			</button>	
		`;
		
		/**
		 * Bullets button
		 */
		
		const _bullets_button = this.props.buttons.includes("bullets") == false ? "" : `
				<button id="js-editor-bullets" class="mvcc-button custom-button--type-outline" title="Bullets">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
						<path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z" />
					</svg>
				</button>	
		`;
		
		/**
		 * Numbers button
		 */
		
		const _numbers_button = this.props.buttons.includes("numbers") == false ? "" : `
				<button id="js-editor-numbers" class="mvcc-button custom-button--type-outline" title="Italics">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
						<path d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z" />
					</svg>
				</button>	
		`;

		/**
		 * Link button
		 */
		const _link_button = this.props.buttons.includes("hr") == false ? "" : `
			<button id="js-editor-link" class="mvcc-button custom-button--type-outline" title="Link">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
					<path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
				</svg>
			</button>	
		`;

		/**
		 * Hr button
		 */
		const _hr_button = this.props.buttons.includes("hr") == false ? "" : `
			<button id="js-editor-hr" class="mvcc-button custom-button--type-outline" title="Horizontal Line">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
					<path d="M160-440v-80h640v80H160Z" />
				</svg>
			</button>	
		`;

		/**
		 * Editor component
		 */
		return `
			<!--#link-->
			
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mvccdev/mvcc-objects-css@main/dist/mvcc.css">
			 
			<!--#styles-->

				<style>
					#js-editor { width: 100%; border: 0; } #js-editor:focus { outline: none; } .custom-button--type-outline:hover { background-color: #eee;	}
				</style>

			<!--#editor-->
				
				<div class="mvcc--shadow-extra-small">

					<!--#buttons-->

						<div id="js-toolbar" style="border-bottom: 1px solid #eee;">
							${_h1_button}
							${_h2_button}
							${_h3_button}
							${_h4_button}
							${_bold_button}	
							${_italic_button}		
							${_bullets_button}
							${_numbers_button}	
							${_link_button}
							${_hr_button}			
						</div>

					<!--#editor-->

						<div class="${props.class}" style="${props.style}">
							<textarea id="js-editor" class="mvcc-form__input" style="height: ${props.height || '250px'};"></textarea>
					 	</div>
				</div>
		`;
	}
}

MvccComponent.register("mvcc-markdown-editor", MvccMarkDownEditor);
 