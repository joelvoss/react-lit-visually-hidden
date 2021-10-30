import { VisuallyHidden } from '../../src/index';

export function Example() {
	return (
		<>
			<h2>Example: Basic</h2>
			<div>
				<p>Some text that is hidden?</p>
				<VisuallyHidden>yes, it is!</VisuallyHidden>
			</div>
		</>
	);
}
