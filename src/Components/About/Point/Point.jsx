import React from 'react'

const Point = ({ label, content, Icon, iconSize}) => {
    return (
        <div className="flex items-start">
            <Icon className={`w-${iconSize} h-auto text-indigo-600 mr-4 `} />
            <div>
                <h3 className="text-xl font-bold text-gray-900">{label}</h3>
                <p className="text-gray-600">{content}</p>
            </div>
        </div>
    )
}

export default Point