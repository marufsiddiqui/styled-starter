import Design 	from '../src/Design'
import Page			from '../src/containers/Page'

export default class extends React.Component {
	render (props) {
	    return <Page prefix="..">
	    	<Design />
	    </Page>
  	}
}