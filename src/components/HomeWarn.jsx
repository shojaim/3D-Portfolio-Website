import React from 'react'

const WarnBox = ({text}) => (
    <div className="warn-box">
        <p className="absolute bottom-4 left-16 mr-2 rounded-md uppercase px-1 py-1 text bg-slate-50 font-semibold text-xs" style={{ whiteSpace: 'pre-line' }}>
            {text}
        </p>
    </div>
)

const renderContent = {
    1: (
        <WarnBox

        text={"This page contains a 3D model and may take time to load. Please be patient. (Use ⬅️➡️ or touch or mouse to rotate the model"}

        />
    ),
}



const HomeWarn = ({ currentStage }) => {
    return renderContent[currentStage] || null;
  }
  
  export default HomeWarn