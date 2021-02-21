import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';

const CollectionsOverview = ({ collection }) => (
	<div className='collections-overview'>
		{
			collection.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collection: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);