import React from 'react';
import {remaining_days, percentage} from '../../_helpers';
import './css/pool.css'
export class Pool extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selectedOption:'',
			submitted:false,
		}
	}
	selectOption = (e) =>{
		this.setState({
			selectedOption:e.target.value,
		})
	}
	submitVote = () =>{
		if(this.state.selectedOption){
			this.setState({submitted:true})
		}
		else return false;
	}
	render(){
		const { post } = this.props;
		const { selectedOption } = this.state;

		const totalVotes     = post.data.options.reduce((a, b) => ({votes: a.votes + b.votes}));
		const remaining_time = remaining_days(post.data.closesAt);

		return !this.state.submitted ? 
		(
			<div className='banner  w-100'>
				<p className='ml-2'>{post.data.text}</p>
				{
					// renderize cada opção da enquete como um div>button					
					post.data.options.map((option,index)=>{
						return(
							<div key={index} className='option text-center' >
								<button 
								onClick={this.selectOption}
								type="button" 
								className={'mx-auto mb-3 btn btn-outline-custom ' + (selectedOption === option.value ? 'bg-custom text-white':'')} 
								value={option.value}
								>
									{option.value}
								</button>
							</div>
						)

					})
				}
				<div>
					<ul className='text-center list-unstyled'>
						<li className={'font-weight-bold ' + (selectedOption ? 'text-custom cursor-pointer' : 'text-muted') } onClick={this.submitVote}>Votar</li>
						<li  className='font-weight-light'>{totalVotes.votes} votos | Restam: {remaining_time} dias</li>		
					</ul>
				</div>
			</div>
		)
		:
		(
			<div className='banner w-100'>
				<p className='ml-2'>{post.data.text}</p>
				{
					post.data.options.map((option, index)=>{
						let val = percentage(totalVotes.votes,option.votes);
						return(
							<div key={index} class="d-flex flex-row mb-3 ml-3">
								<div className="progress-bar rounded font-weight-bold bg-custom" role="progressbar" style={{width:`${val}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
									<span className='mr-auto ml-3'>{option.value}</span>
								</div>
								<div className='ml-2 font-weight-bold lead'>{val}%</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}