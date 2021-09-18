import React, { useEffect, useState } from 'react';
import { Idea } from '../../types/idea';
import Alert from '../Alert/Alert';
import { IdeaExcerpt, IdeaExcerptSkeleton } from '../IdeaExcerpt/IdeaExcerpt';

function App() {
  const [loading, setLoading] = useState(true)
  const [ideas, setIdeas] = useState<Idea[]>([])

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const data = await fetch('http://localhost:3001/idea')
        const ideas = await data.json()
        setIdeas(ideas)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchIdeas()
  }, [])

  return (<div className="container mx-auto">
    <div className="lg:text-center mb-8">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Ideaswalk 2.0</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Teile Projekt Ideen
      </p>
    </div>
    {!loading && ideas.length === 0 && <Alert />}
    {loading ? (<IdeaExcerptSkeleton></IdeaExcerptSkeleton>) : ideas.map((idea, index) => (<IdeaExcerpt key={`ip_${index}_${idea.title}`} title={idea.title} problem={idea.problem} solution={idea.solution}></IdeaExcerpt>))}
  </div>);
}

export default App;
