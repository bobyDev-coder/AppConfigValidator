import React, { FC, ReactNode } from 'react';
import { EnvironmentNotSet } from './EnvNotSet';

interface ValidatorProps {
  requiredVariables: string[];
  children: ReactNode; // Ensure children is properly typed
}

const validateEnvironmentVariables = (variables: string[]): string[] => {
  return variables.filter((variable) => !process.env[variable]);
};

export const AppConfigValidator: FC<ValidatorProps> = ({ requiredVariables, children }) => {
  const missingVariables = validateEnvironmentVariables(requiredVariables);

  if (missingVariables.length > 0) {
    return <EnvironmentNotSet missingVariables={missingVariables} />;
  }

  return <>{children}</>; // Ensure the return type is a ReactNode
};
