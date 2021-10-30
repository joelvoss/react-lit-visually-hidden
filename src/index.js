import { forwardRef } from 'react';
/**
 * VisuallyHidden visually hides child components. It is mostly used to provide
 * text for screen readers in components that otherwise would not include text.
 * It is the logical opposite of the `aria-hidden` attribute.
 */
export const VisuallyHidden = forwardRef(
	({ as: Comp = 'span', style = {}, ...props }, ref) => (
		<Comp
			ref={ref}
			style={{
				border: 0,
				clip: 'rect(0 0 0 0)',
				height: '1px',
				margin: '-1px',
				overflow: 'hidden',
				padding: 0,
				position: 'absolute',
				width: '1px',

				// NOTE(joel): https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
				whiteSpace: 'nowrap',
				wordWrap: 'normal',
				...style,
			}}
			{...props}
		/>
	),
);
