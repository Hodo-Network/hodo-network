import styled from 'styled-components';

const Blurb = styled.p`
	line-height: 1.5;
	font-size: 1.5rem;
`;

const EditLine = styled(Blurb)`
	color: #0d02a2;
	span {
		text-decoration: underline;
	}
`;

export { Blurb, EditLine };
