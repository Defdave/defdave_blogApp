import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Newpost from './Newpost'
import Postpage from './postpage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import EditPost from './EditPost'
import { useEffect } from 'react'
import useAxiosFetch from './hooks/useAxiosFetch'
// import { DataProvider } from './context/DataContext'
import { useStoreActions } from 'easy-peasy'


function App() {
  const setPosts = useStoreActions(actions => actions.setPosts)
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:5000/posts')

    useEffect(() => {
        setPosts(data)
    }, [data])

  return (
    <div className='bg-[#B4D7EE] min-h-screen'>
      {/* <DataProvider> */}
      <Header title="Defdave's Blog" />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home
          isLoading={isLoading}
          fetchError={fetchError} 
          />
        </Route>
        <Route exact path='/post' component={Newpost} />
        <Route path='/edit/:id' component={EditPost} />
        <Route path='/post/:id' component={Postpage} /> 
        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>
      {/* </DataProvider> */}
    </div>
  )
}

export default App
