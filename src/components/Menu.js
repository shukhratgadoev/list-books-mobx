import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const Menu = ({
	categories,
	fetchBooks,
	setActiveCategory,
	activeCategory,
}) => {
	return (
		<ListGroup style={{ minWidth: 215 }}>
			{categories.map((category) => (
				<ListGroup.Item
					style={{ minWidth: 215 }}
					key={category.id}
					onClick={() => {
						setActiveCategory(category.alias);
						fetchBooks();
					}}
					active={category.alias === activeCategory}>
					{category.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
};
