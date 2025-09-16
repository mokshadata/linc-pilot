/* eslint-disable */
var CustomPreview = createClass({
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

// Register the custom preview template for a specific collection
CMS.registerPreviewTemplate("steps", CustomPreview);
