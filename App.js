import React from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import Thread from './component/Thread'
import Proxy from './component/Proxy'
import LoadAccounts from './component/LoadAccounts'
import Start from './component/Start'
import Progress from './component/Progress'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { Provider } from  'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Header />
      <Container>
      <Box display="flex" p={1} >
            <Box flexGrow={2}>
              <Main />
            </Box>
            <Box>
              <LoadAccounts />
              <Start />
              <Progress />
            </Box>
      </Box>
        <div style={{ width: '100%' }}>
          <Box display="flex" justifyContent="center"  bgcolor="background.paper">
            <Box>
              <Thread />
            </Box>
            <Box>
            <Proxy />
            </Box>
          </Box>
        </div>
        <Footer />
      </Container>
    </Provider>
    </div>
  );
}

export default App;
