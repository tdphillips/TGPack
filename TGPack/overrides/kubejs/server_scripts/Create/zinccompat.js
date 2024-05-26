ServerEvents.recipes(event => {
		
		event.remove({ output: 'createdeco:zinc_sheet' })
		event.replaceInput(
			{ input: 'createdeco:zinc_sheet' }, 
						'createdeco:zinc_sheet',
							'#forge:plates/zinc'
)

})
ServerEvents.tags('item', event => {
  event.add('forge:plates/zinc', 'createdeco:zinc_sheet')	
})