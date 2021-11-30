import * as React from 'react';
import { render } from './test-utils';

import { VisuallyHidden } from '../src/index';

describe('<VisuallyHidden />', () => {
	it('should not have ARIA violations', async () => {
		const { container } = render(
			<button onClick={() => void null}>
				<VisuallyHidden>Click Me</VisuallyHidden>
				<span aria-hidden>👏</span>
			</button>,
		);
		await expect(container).toHaveNoAxeViolations();
	});

	it('renders as any HTML element', async () => {
		const hiddenMessage = 'Hidden Message';
		const { getByText } = render(
			<VisuallyHidden as="div">{hiddenMessage}</VisuallyHidden>,
		);
		let visuallyHidden = getByText(hiddenMessage);
		expect(visuallyHidden.tagName).toBe('DIV');
	});
});
