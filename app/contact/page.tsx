import { oswald } from 'fonts'
import { Hero, Copy, Link, Icon } from '@jsimonds/component-library'

const ContactPage = () => (
	<div>
		<Hero heading="Contact" headingClass={oswald.className} simple />
		<Copy
			heading="Socials"
			headingClass={oswald.className}
			intro="If you like what you see feel free to reach out to me on one of my socials:"
		>
			<ul>
				<li>
					<Link
						href="https://discordapp.com/users/219586181229314048"
						hideExternal
					>
						<Icon name="discord" simple />
						Discord
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/Billy_Mays3" hideExternal>
						<Icon name="twitter" simple />
						Twitter
					</Link>
				</li>
				<li>
					<Link href="https://www.linkedin.com/in/jacksonsimonds/" hideExternal>
						<Icon name="linkedin" simple />
						LinkedIn
					</Link>
				</li>
			</ul>
		</Copy>
		<Copy
			heading="Email"
			headingClass={oswald.className}
			intro="You can also reach out to me directly here though note I am not actively taking new web projects."
			link={{
				href: 'mailto:jaksimonds@gmail.com',
				text: 'jaksimonds@gmail.com',
				icon: 'email',
			}}
		/>
	</div>
)

export default ContactPage
