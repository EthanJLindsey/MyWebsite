const ExpandButton = ({ onClick, active, style }) => {
	return (
		<div
			onClick={onClick}
			style={{
				height: '20px',
				width: '20px',
        display: 'grid',
				cursor: 'pointer'
			}}>
			<div
				style={{
          gridRow: '1',
          gridColumn: '1',
					backgroundColor: 'white',
          transition: '400ms',
					height: '2px',
					width: '17px',
          borderRadius: '2px',
          transform: active? 'translate(-2px,10px) rotate(-60deg)':'translate(-2px,10px) rotate(60deg)' 
				}}
        />
			<div
				style={{
					gridRow: '1',
          gridColumn: '1',
          backgroundColor: 'white',
          transition: '400ms',
					height: '2px',
					width: '17px',
          borderRadius: '2px',
          transform: active? 'translate(6px,10px) rotate(60deg)':'translate(6px,10px) rotate(-60deg)' 
				}}
        />
		</div>
	);
};

export default ExpandButton;
