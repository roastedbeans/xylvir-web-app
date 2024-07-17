import React from 'react';

const AnimeLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <div>{children}</div>;
};

export default AnimeLayout;
