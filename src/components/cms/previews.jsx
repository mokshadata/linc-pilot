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
				<h3>
					{this.props.entry.get('data').get('location')} at {this.props.entry.get('data').get('url')}
				</h3>
				{this.props.widgetFor('page_title') && <section className="page-title">
					<strong>Page title</strong> {this.props.widgetFor('page_title')}
				</section>}
				<section className="page-content">
					<strong>Content</strong>
					{this.props.widgetFor('headline')}
					{this.props.widgetFor('body')}
					{this.props.entry.get('data').get('call_to_action') && 
						<>
							<strong>Call to Action</strong>
							<p>
								<a className="primary" role="button">{this.props.entry.get('data').get('call_to_action')}</a>
							</p>
						</>
					}
				</section>
				{this.props.widgetFor('cover_image') && <section className="page-image">
					<strong>Image</strong>
					{this.props.widgetFor('cover_image')}
					{this.props.widgetFor('cover_alt')}
					<p>
						Image will be on the {this.props.entry.get('data').get('cover_first') &&  "left" || "right"} side.
					</p>
				</section> || <section className="page-image">
					<strong>Image</strong>
					<p>No image</p>
				</section>}
			</div>
		)
	}
})


// Register the custom preview template for a specific collection
// CMS.registerPreviewTemplate("steps", StepsPreview);
CMS.registerPreviewTemplate("parts", PartsPrview)
