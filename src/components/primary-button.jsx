import React from 'react';

const PrimaryButton = ({ children, onClick, type = 'button', className = '', disabled = false, icon, bgColor = 'bg-[#EFD372]', textColor = 'text-[#274C5B]' }) => {
    return (
        <button
            type={type}
            className={`flex items-center px-6 py-4 font-bold rounded-xl ${bgColor} ${textColor} hover:bg-opacity-80 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
};

export default PrimaryButton;
