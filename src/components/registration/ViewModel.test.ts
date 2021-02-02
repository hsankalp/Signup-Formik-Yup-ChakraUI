import ViewModel from './ViewModel';

describe('Registration View Model test', () => {
  describe('Handle Phone Number', () => {
    const viewModel = new ViewModel();
    const event = {
      target: {
        value: '',
      },
    } as React.ChangeEvent<HTMLInputElement>;
    const phoneUSRegex = /^(\([2-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

    it('should format when a 10 digit number is entered', () => {
      event.target.value = '2222222222';
      viewModel.handlePhone(event);
      expect(event.target.value).toEqual('(222) 222-2222');
      expect(event.target.value).toMatch(phoneUSRegex);
    });

    it('should format only the numbers when random text and numbers are entered', () => {
      event.target.value = 'dfasjdfhk #$ j22222hfg22222';
      viewModel.handlePhone(event);
      expect(event.target.value).toEqual('(222) 222-2222');
      expect(event.target.value).toMatch(phoneUSRegex);
    });

    it('should not format if length of numbers <= 3 ', () => {
      event.target.value = '222';
      viewModel.handlePhone(event);
      expect(event.target.value).toEqual('222');
    });

    it('should only format the first 10 numbers entered', () => {
      event.target.value = '2345678910222222222';
      viewModel.handlePhone(event);
      expect(event.target.value).toEqual('(234) 567-8910');
      expect(event.target.value).toMatch(phoneUSRegex);
    });
  });
});
