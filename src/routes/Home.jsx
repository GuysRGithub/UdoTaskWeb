import { Header, Feature, Content } from "../container/index";

import { images } from "../constants"

function Home() {
  return (
    <div className="app">
      <Header />
      <Feature />
      <Content title="Home page for quick access" description="Recent and group tasks are shown in home tab for easy to keep track of the all your tasks list" image={images.shotHome} flip={false} idName="recent"
        circles={
          <>
            <div className='circle-cmp app__flex p-4 absolute top-24 left-8' key={`circle-favorite`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  favorite
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-4 absolute bottom-24 right-8' key={`circle-home`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-8 w-8 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-xl">
                  home
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="List tasks view" description="View all your tasks and its summary easily with list" image={images.shotTask} flip={true} idName="editor"
        circles={
          <>
            <div className='circle-cmp app__flex p-6 absolute left-0 top-0' key={`circle-quill`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-16 w-16 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-4xl">
                  history_edu
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-8 right-0 bottom-0 absolute' key={`circle-text-editor`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  format_color_text
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="Group tasks based on its status" description="Group multiple tasks of the same status (pending, completed, overdue) into group to help you keep track of your tasks with an ease" image={images.shotTaskStatus} flip={false} idName="list"
        circles={
          <>
            <div className='circle-cmp app__flex p-6 absolute left-0 bottom-0' key={`circle-list`}>
              <span className="material-icons bg-gradient-to-l bg-clip-text text-transparent from-indigo-700 to-cyan-800 text-3xl">
                list_alt
              </span>
            </div>
            <div className='circle-cmp app__flex p-8 right-0 top-0 absolute' key={`circle-grid`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  grid_view
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="View all task detail info" description="View and edit all your task details info with a friendly and simple yet effectively UI" image={images.shotTaskDetail} flip={true} idName="calendar"
        circles={
          <>
            <div className='circle-cmp app__flex p-5 absolute left-0' key={`circle-calendar`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-14 w-14 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-3xl">
                  calendar_month
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-6 right-0 bottom-0 absolute' key={`circle-event`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  celebration
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="Keep track of your tasks with calendar" description="Keep track of all your events and task timer easily with calendar view" image={images.shotCalendar} flip={false} idName="emoji"
        circles={
          <>
            <div className='circle-cmp app__flex p-4 absolute left-12 top-12' key={`circle-enjoy`}>
              <span className='app__flex bg-gradient-to-l rounded-full h-8 w-8 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  mood
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-6 right-12 bottom-12 absolute' key={`circle-happy`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  sentiment_very_satisfied
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="See all tasks in chronoly order" description="Display all tasks and its summary in chronoly order with timeline view" image={images.shotTimeline} flip={true} idName="view"
        circles={
          <>
            <div className='circle-cmp app__flex p-4 absolute left-0 top-0' key={`circle-pages`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-10 w-10 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-symbols-outlined text-white text-2xl">
                  pages
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-4 right-0 bottom-0 absolute' key={`circle-stories`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  auto_stories
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="View and visualize your tasks with summary and chart" description="Built-in overview page to allow you to see and visualize your tasks and its status" image={images.shotChart} flip={false} idName="image-editor"
        circles={
          <>
            <div className='circle-cmp app__flex h-16 w-16 absolute top-0' key={`circle-camera`}>
              <span className="material-icons bg-gradient-to-l bg-clip-text text-transparent from-indigo-700 to-purple-800 text-4xl">
                camera
              </span>
            </div>
            <div className='circle-cmp app__flex bottom-0 right-0 absolute h-20 w-20' key={`circle-image-filter`}>
              <span className="material-icons bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-indigo-800 text-4xl">
                palette
              </span>
            </div>
          </>
        } />
      <Content title="Dark mode available" description="Dark mode is ready for you to reduce stress from screen light. Feel ease and comfortable when writing diaries at night" image={images.shotDarkTheme} flip={true} idName="dark-mode"
        circles={
          <>
            <div className='circle-cmp app__flex h-16 w-16' key={`circle-dark-mode`}>
              <span className="material-icons bg-gradient-to-l bg-clip-text text-transparent from-indigo-600 to-indigo-900 text-4xl">
                dark_mode
              </span>
            </div>
            <div className='circle-cmp app__flex bottom-0 right-0 absolute h-20 w-20' key={`circle-theme`}>
              <span className="material-icons bg-gradient-to-r bg-clip-text text-transparent from-indigo-800 to-indigo-600 text-4xl">
                palette
              </span>
            </div>
          </>
        } />
    </div>
  )
}

export default Home 
