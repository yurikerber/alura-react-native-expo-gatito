import Routes from './src/routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import ScreenDefault from './src/components/ScreenDefault';

export default function App() {
  return <ScreenDefault><Routes /></ScreenDefault>
}