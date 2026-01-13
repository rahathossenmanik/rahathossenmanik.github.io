import { HashRouter, Route, Routes } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import Portfolio from './pages/md/Portfolio.mdx';
import Career from './pages/md/Career.mdx';
import Bio from './pages/md/Bio.mdx';
import Experience from './pages/md/Experience.mdx';
import Skills from './pages/md/Skills.mdx';
import Education from './pages/md/Education.mdx';
import Projects from './pages/md/Projects.mdx';
import Certifications from './pages/md/Certifications.mdx';
import Resume from './pages/md/Resume.mdx';
import './App.css';
import GithubRibbon from './components/GithubRibbon';
import useMDXComponents from './hooks/useMdxComponents';
import Layout from './components/Layout';

const App = () => {
  const components = useMDXComponents();

  return (
    <HashRouter>
      <MDXProvider components={components}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Portfolio />} />
            <Route path='/career' element={<Career />} />
            <Route path='/bio' element={<Bio />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/education' element={<Education />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certifications' element={<Certifications />} />
            <Route path='/resume' element={<Resume />} />
          </Route>
        </Routes>
        <GithubRibbon />
      </MDXProvider>
    </HashRouter>
  );
};

export default App;
