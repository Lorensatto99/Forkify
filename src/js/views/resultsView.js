import previewView from './previewView.js';
import View from './View.js';


class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not find recipe. Please try another one!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultsView();
