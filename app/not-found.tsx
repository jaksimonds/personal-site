import { oswald } from 'fonts'
import { Hero } from '@jsimonds/component-library'

const NotFound = () => (
	<div>
		<Hero
			heading="404"
			headingClass={oswald.className}
			intro={
				"The page you have requested isn't currently supported. It's possible the original page was removed or a link has not been updated."
			}
		/>
	</div>
)

export default NotFound
