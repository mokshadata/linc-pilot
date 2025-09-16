/* eslint-disable */
var StepsPreview = createClass({
	getInitialState: function() {
		return {
			steps: [],
		}
	},
	componentWillMount: async function() {
		const collection = await this.props.getCollection('steps')
		const steps = collection.map((post) => (post.get('data')))
		steps.sort((a, b) => (a.order - b.order));
		this.setState({
			steps,
		})
	},
	render: function () {
		return <div className="preview-wrapper">{
			this.state.steps.map((step) => (<div>
				<h3>{step.order}. {step.title}</h3>
				<div dangerouslySetInnerHTML={{__html: marked.parse(step.body)}}/>
			</div>))
		}</div>
	},
});

var PartsPrview = createClass({
	render: function () {

		return (
			<div className="preview-wrapper">
				{this.props.widgetFor('page_title') && <section className="page-title">
					<strong>Page Title</strong> {this.props.widgetFor('page_title')}
				</section>}
				<section className="page-content">
					<strong>Content</strong>
					{this.props.widgetFor('headline')}
					{this.props.widgetFor('body')}
					{this.props.widgetFor('call_to_action')}
				</section>
				{this.props.widgetFor('cover_image') && <section className="page-image">
					<strong>Image</strong>
					{this.props.widgetFor('cover_image')}
					{this.props.widgetFor('cover_alt')}
					Image will be on the {this.props.entry.get('data').get('cover_first') &&  "left" || "right"} side.
				</section>}
			</div>
		)
	}
})


// Register the custom preview template for a specific collection
// CMS.registerPreviewTemplate("steps", StepsPreview);
CMS.registerPreviewTemplate("parts", PartsPrview)
