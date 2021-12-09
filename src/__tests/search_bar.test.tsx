import SearchBar from "../components/search_bar";
import { render, fireEvent, screen } from "@testing-library/react";

describe('search bar input change', () => {
    const inputValue = 'rubbish input';
    const changeHandler = (a: string) => {};
    it('should correctly change input value', () => {
        render(<SearchBar testValue={inputValue} onTermChange={changeHandler} />)
        expect(screen.getByDisplayValue(inputValue).id).toBe('search-input');
    });

    it('should correctly call the value change function', async () => {
        const callMock = jest.fn();
        const { getByRole } = render(<SearchBar onTermChange={callMock} />);
        const input = getByRole('textbox');
        fireEvent.change(input, { target: { value: inputValue } });
        expect(callMock).toHaveBeenCalledWith(inputValue);
    });
});