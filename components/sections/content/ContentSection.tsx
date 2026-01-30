import { ContentSection as ContentSectionType } from '@/types/section';
import React from 'react'
import { ContentSingle } from './ContentSingle';
import { ContentTwoColumn } from './ContentTwoColumn';
import ContentImageLayout from './ContentImage';

export type ContentSectionProps ={
    section: ContentSectionType
    isEditing: boolean
}

const ContentSection = ({section, isEditing}:ContentSectionProps) => {
  switch (section.layout) {
    case 'single':
        return <ContentSingle section={section} isEditing={isEditing}/>;
    case 'two-col':
        return <ContentTwoColumn section={section} isEditing={isEditing}/>;
    case 'image':
        return <ContentImageLayout section={section} isEditing={isEditing}/>;
    default:
        return null;
  }
}

export default ContentSection