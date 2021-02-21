import crownCat from '../../assets/crowncat.jpg'

const INITIAL_STATE = {
	sections: [{
	    title: 'hats',
	    imageUrl: crownCat,
	    id: 1,
	    linkUrl: 'shop/hats'
	  },
	  {
	    title: 'jackets',
	    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5bdc296fcc8fed8e49156556/1569560651803-KLD6ID4QTG4MTDME3QDL/ke17ZwdGBToddI8pDm48kL4WrIntsHuCODFzGytxs8sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcw31z2cKmL83lZVTgYf1Shcnt0pzT4b-h8WwoQ3rX-86z0Q_QpJgDA4jmv5AtYw-J/cat-on-canoe-in-jacket',
	    id: 2,
	    linkUrl: 'shop/jackets'
	  },
	  {
	    title: 'sneakers',
	    imageUrl: 'https://i.pinimg.com/originals/28/9f/80/289f80315bc862116b4c2f23fd2bb9ae.jpg',
	    id: 3,
	    linkUrl: 'shop/sneakers'
	  },
	  {
	    title: 'womens',
	    imageUrl: 'https://i.pinimg.com/originals/d0/a8/16/d0a81616fe0a265ab15ae505c14f882b.jpg',
	    size: 'large',
	    id: 4,
	    linkUrl: 'shop/womens'
	  },
	  {
	    title: 'mens',
	    imageUrl: 'https://frontpagemeews.com/wp-content/uploads/2019/08/iStock-1071075930.jpg',
	    size: 'large',
	    id: 5,
	    linkUrl: 'shop/mens'
	  }
	]	
};

const INITIAL_STATE_2 = {
	sections: [{
	    title: 'hats',
	    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
	    id: 1,
	    linkUrl: 'shop/hats'
	  },
	  {
	    title: 'jackets',
	    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
	    id: 2,
	    linkUrl: 'shop/jackets'
	  },
	  {
	    title: 'sneakers',
	    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
	    id: 3,
	    linkUrl: 'shop/sneakers'
	  },
	  {
	    title: 'womens',
	    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
	    size: 'large',
	    id: 4,
	    linkUrl: 'shop/womens'
	  },
	  {
	    title: 'mens',
	    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
	    size: 'large',
	    id: 5,
	    linkUrl: 'shop/mens'
	  }
	]	
};


const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;