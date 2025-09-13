/* eslint-disable */
var CustomPreview = createClass({
	render: function () {
		var entry = this.props.entry;
		// Add 'prose' class to the div for the tailwind typography styles
		// return h("div", { className: "prose" }, this.props.widgetFor("body"));
		return <div className="preview-wrapper">
			<h1>{this.props.widgetFor('order')} {this.props.widgetFor('title')}</h1>
			{this.props.widgetFor('body')}
		</div>
	},
});

// Register the custom preview template for a specific collection
CMS.registerPreviewTemplate("steps", CustomPreview);
