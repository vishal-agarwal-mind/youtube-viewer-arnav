import React, { useState, useEffect } from "react";
import { StringFunction } from "../utils/types";
import logo from '../assets/logo.svg';
import darkLogo from '../assets/dark-logo.svg';
import Switch from "../widgets/switch";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../features/video/videoSlice";
import { selectTheme, toggleTheme } from "../features/theme/themeSlice";

type SearchBarProps = { 
	onTermChange: StringFunction,
	testValue?: string
};

const SearchBar = ({ onTermChange, testValue = '' }: SearchBarProps) => {

	const dispatch = useDispatch();
	const appTheme = useTypedSelector(selectTheme);
	const [term, setTerm] = useState<string>('');

	const handleToggle = () => {
		dispatch(toggleTheme(appTheme === 'dark' ? 'light' : 'dark'));
	};

	// this effect hook fires only while testing
	useEffect(() => {
		if(testValue) setTerm(testValue);
	}, [testValue]);

	// function that is called every time input is changed
	// takes in the input value and sets appropriate state
	// alse calls the props function which is responsible to fetch api
	const onInputChange = (term: string) => {
		setTerm(term);
		onTermChange(term);
	};

	// component JSX
	return <div className = {`search-bar ${appTheme === 'dark' ? 'dark-head' : ''}`}>
		<img alt='Youtube Starter' src={appTheme === 'dark' ? darkLogo : logo} />
		<input 
			placeholder="Search Videos..." id="search-input" 
			value = {term} onChange = {e => onInputChange(e.target.value)} 
			className={appTheme === 'dark' ? 'dark-input' : ''}
		/>
		<Switch 
			isOn={appTheme === 'dark'} offText='🌞'
			onColor="#EF476F" onText='🌜'
			handleToggle={handleToggle}
		/>
	</div>
};

export default SearchBar;
