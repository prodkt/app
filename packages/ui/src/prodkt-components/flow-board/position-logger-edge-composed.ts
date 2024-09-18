/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { BuiltInEdge, EdgeProps, EdgeTypes } from '@xyflow/react'
import type { ButtonEdge as ButtonEdgeType } from './position-logger-button-edge'

import ButtonEdge from './position-logger-button-edge'

export const initialEdges = [
  { id: 'a->c', source: 'a', target: 'c', animated: true },
  { id: 'b->d', source: 'b', target: 'd', type: 'button-edge', data: {} }, // Ensure type and data are correct
  { id: 'c->d', source: 'c', target: 'd', animated: true },
] satisfies CustomEdgeType[] // Ensure this conforms to CustomEdgeType[]

export const edgeTypes = {
  /* @ts-expect-error on button edge  */
  'button-edge': ButtonEdge,
  // 'id': string,
  // 'interactionWidth': number,
  // 'className': string,
  // 'labelX': number,
  // 'labelY': number,
  // 'markerStart': string,
  // 'markerEnd': string,
  // 'path' string,
  // 'style': CSSProperties,
} satisfies EdgeTypes

// Append the types of your custom edges to the BuiltInEdge type
export type CustomEdgeType = BuiltInEdge | EdgeProps<ButtonEdgeType>
