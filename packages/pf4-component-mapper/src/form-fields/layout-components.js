import React from 'react';
import PropTypes from 'prop-types';
import { layoutComponents } from '@data-driven-forms/react-form-renderer';

import { Text, TextVariants } from '@patternfly/react-core/dist/js/components/Text/Text';
import { TextContent } from '@patternfly/react-core/dist/js/components/Text/TextContent';
import { Form } from '@patternfly/react-core/dist/js/components/Form/Form';
import { ActionGroup } from '@patternfly/react-core/dist/js/components/Form/ActionGroup';
import { Button } from '@patternfly/react-core/dist/js/components/Button/Button';

import './layout-components-styles.scss';

const ButtonLayout = ({ label, bsStyle, children, disabled, ...props }) =>
  <Button variant={ bsStyle || 'secondary' } isDisabled={ disabled } { ...props }>
    { label }{ children }
  </Button>;

ButtonLayout.propTypes = {
  label: PropTypes.string.isRequired,
  bsStyle: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const ButtonGroupLayout = ({ children, ...props }) =>
  <ActionGroup { ...props } >
    { children }
  </ActionGroup>;

ButtonGroupLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const Title = ({ children }) => <TextContent>
  <Text component={ TextVariants.h1 }>{ children }</Text>
</TextContent>;

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const Description = ({ children }) => <TextContent>
  <Text component={ TextVariants.p }>{ children }</Text>
</TextContent>;

Description.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const layoutMapper = {
  [layoutComponents.FORM_WRAPPER]: Form,
  [layoutComponents.BUTTON]: ButtonLayout,
  [layoutComponents.BUTTON_GROUP]: ButtonGroupLayout,
  [layoutComponents.TITLE]: Title,
  [layoutComponents.DESCRIPTION]: Description,
};

export default layoutMapper;
